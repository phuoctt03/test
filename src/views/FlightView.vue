<template>
    <div id="app" class="container mx-auto p-4">
      <Toast />
      <h1 class="text-3xl font-bold mb-4">Todo List with PrimeVue</h1>
      
      <div class="mb-4 flex">
        <InputText 
          v-model="newTodo" 
          placeholder="Add a new todo"
          class="p-inputtext-sm mr-2 flex-grow"
          @keyup.enter="addTodo"
        />
        <Button @click="addTodo" label="Add" icon="pi pi-plus" class="p-button-sm" />
      </div>
  
      <DataTable :value="todos" responsiveLayout="scroll" class="mb-6">
        <Column field="text" header="Task"></Column>
        <Column field="completed" header="Status">
          <template #body="slotProps">
            <ToggleButton 
              v-model="slotProps.data.completed" 
              onLabel="Completed" 
              offLabel="Pending"
              @change="toggleTodo(slotProps.data)"
              class="p-button-sm"
            />
          </template>
        </Column>
        <Column header="Actions">
          <template #body="slotProps">
            <Button @click="deleteTodo(slotProps.data.id)" icon="pi pi-trash" class="p-button-sm p-button-danger" />
          </template>
        </Column>
      </DataTable>
  
      <h2 class="text-2xl font-bold mb-4">PrimeVue Component Showcase</h2>
      <TabView>
        <TabPanel header="Basic Components">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <template #title>Dropdown</template>
              <template #content>
                <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full" />
              </template>
            </Card>
  
            <Card>
              <template #title>Calendar</template>
              <template #content>
                <Calendar v-model="date" dateFormat="dd/mm/yy" />
              </template>
            </Card>
  
            <Card>
              <template #title>Slider</template>
              <template #content>
                <Slider v-model="sliderValue" class="w-full" />
                <p class="mt-2">Value: {{ sliderValue }}</p>
              </template>
            </Card>
  
            <Card>
              <template #title>InputNumber</template>
              <template #content>
                <InputNumber v-model="numberValue" showButtons buttonLayout="horizontal" spinnerMode="horizontal" 
                  decrementButtonClass="p-button-danger" incrementButtonClass="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" 
                />
              </template>
            </Card>
  
            <Card>
              <template #title>ProgressBar</template>
              <template #content>
                <ProgressBar :value="progressValue" />
                <Button @click="incrementProgress" label="Increment" class="mt-2" />
              </template>
            </Card>
          </div>
        </TabPanel>
  
        <TabPanel header="Advanced Components">
          <Accordion :activeIndex="0">
            <AccordionTab header="Accordion Tab 1">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </AccordionTab>
            <AccordionTab header="Accordion Tab 2">
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </AccordionTab>
            <AccordionTab header="Accordion Tab 3">
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </AccordionTab>
          </Accordion>
        </TabPanel>
      </TabView>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { useToast } from 'primevue/usetoast';
  
  export default {
    data() {
      return {
        todos: [],
        newTodo: '',
        selectedCity: null,
        cities: [
          { name: 'New York', code: 'NY' },
          { name: 'London', code: 'LDN' },
          { name: 'Paris', code: 'PRS' },
          { name: 'Tokyo', code: 'TKY' }
        ],
        date: null,
        sliderValue: 50,
        numberValue: 0,
        progressValue: 0
      };
    },
    mounted() {
      this.fetchTodos();
    },
    methods: {
      async fetchTodos() {
        try {
          const response = await axios.get('http://localhost:3000/api/todos');
          this.todos = response.data;
        } catch (error) {
          console.error('Error fetching todos:', error);
          this.showErrorToast('Failed to fetch todos');
        }
      },
      async addTodo() {
        if (this.newTodo.trim()) {
          try {
            const response = await axios.post('http://localhost:3000/api/todos', { text: this.newTodo });
            this.todos.push(response.data);
            this.newTodo = '';
            this.showSuccessToast('Todo added successfully');
          } catch (error) {
            console.error('Error adding todo:', error);
            this.showErrorToast('Failed to add todo');
          }
        }
      },
      async toggleTodo(todo) {
        try {
          await axios.put(`http://localhost:3000/api/todos/${todo.id}`, { completed: todo.completed });
          this.showSuccessToast('Todo status updated');
        } catch (error) {
          console.error('Error updating todo:', error);
          this.showErrorToast('Failed to update todo status');
        }
      },
      async deleteTodo(id) {
        try {
          await axios.delete(`http://localhost:3000/api/todos/${id}`);
          this.todos = this.todos.filter(todo => todo.id !== id);
          this.showSuccessToast('Todo deleted successfully');
        } catch (error) {
          console.error('Error deleting todo:', error);
          this.showErrorToast('Failed to delete todo');
        }
      },
      showSuccessToast(message) {
        const toast = useToast();
        toast.add({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
      },
      showErrorToast(message) {
        const toast = useToast();
        toast.add({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
      },
      incrementProgress() {
        this.progressValue = (this.progressValue + 10) % 110;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional component-specific styles here */
  </style>
  
  