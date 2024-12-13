<template>
  <div id="app" class="p-4">
    <h1 class="text-4xl font-bold mb-6">PrimeVue Component Showcase</h1>
    <TabView>
      <TabPanel header="Form Components">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ShowcaseItem title="InputText">
            <InputText v-model="inputTextValue" placeholder="Enter text" />
          </ShowcaseItem>
          <ShowcaseItem title="AutoComplete">
            <AutoComplete 
              v-model="autocompleteValue" 
              :suggestions="filteredCities" 
              field="name" 
              placeholder="Select a city" 
            />
          </ShowcaseItem>
          <ShowcaseItem title="InputNumber">
            <InputNumber v-model="inputNumberValue" />
          </ShowcaseItem>
          <ShowcaseItem title="InputMask">
            <InputMask v-model="inputMaskValue" mask="99-999999" placeholder="99-999999" />
          </ShowcaseItem>
          <ShowcaseItem title="Checkbox">
            <Checkbox v-model="checkboxValue" :binary="true" />
          </ShowcaseItem>
          <ShowcaseItem title="RadioButton">
            <RadioButton v-model="radioValue" value="Option 1" /> Option 1
            <RadioButton v-model="radioValue" value="Option 2" /> Option 2
          </ShowcaseItem>
          <ShowcaseItem title="Dropdown">
            <Dropdown v-model="dropdownValue" :options="dropdownOptions" optionLabel="name" placeholder="Select a City" />
          </ShowcaseItem>
          <ShowcaseItem title="MultiSelect">
            <MultiSelect v-model="multiSelectValue" :options="dropdownOptions" optionLabel="name" placeholder="Select Cities" />
          </ShowcaseItem>
          <ShowcaseItem title="Textarea">
            <Textarea v-model="textareaValue" rows="3" cols="30" />
          </ShowcaseItem>
          <ShowcaseItem title="Calendar">
            <Calendar 
              v-model="calendarValue" 
              dateFormat="dd/mm/yy" 
              :showIcon="false" 
              :mask="true" 
              placeholder="DD/MM/YYYY" 
            />
          </ShowcaseItem>

          <ShowcaseItem title="Chips">
            <Chips v-model="chipsValue" />
          </ShowcaseItem>
          <ShowcaseItem title="Chip">
            <Chip label="Technology" icon="pi pi-tag" />
          </ShowcaseItem>
          <ShowcaseItem title="InputGroup">
            <InputGroup>
              <InputText v-model="inputTextValue" />
              <Button label="Search" icon="pi pi-search" />
            </InputGroup>
          </ShowcaseItem>
          <ShowcaseItem title="Slider">
            <Slider v-model="sliderValue" />
          </ShowcaseItem>
          <ShowcaseItem title="Rating">
            <Rating v-model="ratingValue" />
          </ShowcaseItem>
          <ShowcaseItem title="ColorPicker">
            <ColorPicker v-model="colorValue" />
          </ShowcaseItem>
          <ShowcaseItem title="ToggleButton">
            <ToggleButton v-model="toggleValue" onLabel="On" offLabel="Off" />
          </ShowcaseItem>
          <ShowcaseItem title="SelectButton">
            <SelectButton v-model="selectButtonValue" :options="selectButtonOptions" optionLabel="name" />
          </ShowcaseItem>
          <ShowcaseItem title="Breadcrumb">
            <Breadcrumb :model="breadcrumbItems" />
          </ShowcaseItem>
          <ShowcaseItem title="InputSwitch">
            <InputSwitch v-model="switchValue" />
          </ShowcaseItem>
        </div>
      </TabPanel>

      <TabPanel header="Button Components">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ShowcaseItem title="Button">
            <Button label="Click me" icon="pi pi-check" />
          </ShowcaseItem>
          <ShowcaseItem title="SplitButton">
            <SplitButton label="Save" icon="pi pi-check" :model="splitButtonItems" />
          </ShowcaseItem>
          <ShowcaseItem title="SpeedDial">
            <SpeedDial :model="speedDialItems" />
          </ShowcaseItem>
          <ShowcaseItem title="Timeline">
            <Timeline :value="timelineData" />
          </ShowcaseItem>
        </div>
      </TabPanel>

      <TabPanel header="Data Components">
        <div class="grid grid-cols-1 gap-4">
          <ShowcaseItem title="DataTable">
            <DataTable :value="tableData" :paginator="true" :rows="5">
              <Column field="id" header="ID"></Column>
              <Column field="name" header="Name"></Column>
              <Column field="category" header="Category"></Column>
              <Column field="quantity" header="Quantity"></Column>
            </DataTable>
          </ShowcaseItem>
          <ShowcaseItem title="Tree">
            <Tree :value="treeNodes" />
          </ShowcaseItem>
          <ShowcaseItem title="TreeTable">
            <TreeTable :value="treeTableNodes" :paginator="true" :rows="5">
              <Column field="name" header="Name" expander></Column>
              <Column field="size" header="Size"></Column>
              <Column field="type" header="Type"></Column>
            </TreeTable>
          </ShowcaseItem>
        </div>
      </TabPanel>

      <TabPanel header="Panel Components">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ShowcaseItem title="Accordion">
            <Accordion :activeIndex="0">
              <AccordionTab header="Header I">Content I</AccordionTab>
              <AccordionTab header="Header II">Content II</AccordionTab>
              <AccordionTab header="Header III">Content III</AccordionTab>
            </Accordion>
          </ShowcaseItem>
          <ShowcaseItem title="Card">
            <Card>
              <template #title>Card Title</template>
              <template #content>Card content</template>
              <template #footer>Card footer</template>
            </Card>
          </ShowcaseItem>
          <ShowcaseItem title="Panel">
            <Panel header="Panel Title">Panel content</Panel>
          </ShowcaseItem>
          <ShowcaseItem title="Fieldset">
            <Fieldset legend="Fieldset Legend">Fieldset content</Fieldset>
          </ShowcaseItem>
        </div>
      </TabPanel>

      <TabPanel header="Overlay Components">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ShowcaseItem title="Dialog">
            <Button label="Show Dialog" icon="pi pi-external-link" @click="showDialog" />
            <Dialog v-model:visible="dialogVisible" modal header="Dialog Header" :style="{ width: '50vw' }">
              <p>This is a sample dialog content.</p>
            </Dialog>
          </ShowcaseItem>
          <ShowcaseItem title="OverlayPanel">
            <Button type="button" label="Toggle" @click="toggle" />
            <OverlayPanel ref="op">
              <p>Overlay panel content</p>
            </OverlayPanel>
          </ShowcaseItem>
          <ShowcaseItem title="Sidebar">
            <Button icon="pi pi-arrow-right" @click="visibleSidebar = true" />
            <Sidebar v-model:visible="visibleSidebar">
              <h3>Sidebar</h3>
              <p>This is the sidebar content.</p>
            </Sidebar>
          </ShowcaseItem>
        </div>
      </TabPanel>

      <TabPanel header="Menu Components">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ShowcaseItem title="Menu">
            <Menu :model="menuItems" />
          </ShowcaseItem>
          <ShowcaseItem title="Menubar">
            <Menubar :model="menubarItems" />
          </ShowcaseItem>
          <ShowcaseItem title="TieredMenu">
            <TieredMenu :model="tieredMenuItems" />
          </ShowcaseItem>
          <ShowcaseItem title="ContextMenu">
            <ContextMenu :model="contextMenuItems" ref="cm" />
            <div @contextmenu="onContextMenu" class="w-full h-24 bg-gray-200 flex items-center justify-center">
              Right-click here to open context menu
            </div>
          </ShowcaseItem>
        </div>
      </TabPanel>

      <TabPanel header="Chart Components">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ShowcaseItem title="Chart">
            <Chart type="bar" :data="chartData" :options="chartOptions" />
          </ShowcaseItem>
          <ShowcaseItem title="Dock">
            <Dock :model="dockItems" :position="position">
              <template #itemicon="{ item }">
                <img v-tooltip.top="item.label" :alt="item.label" :src="item.icon" style="width: 100%" />
              </template>
            </Dock>
          </ShowcaseItem>
        </div>
      </TabPanel>

      <TabPanel header="Messages">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ShowcaseItem title="Message">
            <Message severity="info" text="Info Message" />
            <Message severity="success" text="Success Message" />
            <Message severity="warn" text="Warning Message" />
            <Message severity="error" text="Error Message" />
          </ShowcaseItem>
          <ShowcaseItem title="Toast">
            <Button label="Show Toast" icon="pi pi-check" @click="showToast" />
            <Toast />
          </ShowcaseItem>
          <ShowcaseItem title="InlineMessage">
            <InlineMessage severity="error" text="This is an error message." />
          </ShowcaseItem>
        </div>
      </TabPanel>

      <TabPanel header="Media Components">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ShowcaseItem title="Carousel">
            <Carousel :value="carouselItems" :numVisible="1" :numScroll="1">
              <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
                  <div class="mb-3">
                    <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-6 shadow-2" />
                  </div>
                  <div>
                    <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                    <h6 class="mt-0 mb-3">{{ slotProps.data.price }}</h6>
                  </div>
                </div>
              </template>
            </Carousel>
          </ShowcaseItem>
          <ShowcaseItem title="Galleria">
            <Galleria :value="galleriaItems" :responsiveOptions="galleriaResponsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
              <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
              </template>
              <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
              </template>
            </Galleria>
          </ShowcaseItem>
        </div>
      </TabPanel>
    </TabView>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'

export default {
  setup() {
    const toast = useToast()

    // Form Components
    const inputTextValue = ref('')
    const inputNumberValue = ref(0)
    const inputMaskValue = ref('')
    const checkboxValue = ref(false)
    const radioValue = ref(null)
    const dropdownValue = ref(null)
    const multiSelectValue = ref(null)
    const textareaValue = ref('')
    const calendarValue = ref(null)
    const sliderValue = ref(50)
    const ratingValue = ref(null)
    const colorValue = ref('1976D2')
    const toggleValue = ref(false)
    const selectButtonValue = ref(null)

    const dropdownOptions = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ]

    const selectButtonOptions = [
      { name: 'Option 1', code: 'O1' },
      { name: 'Option 2', code: 'O2' },
      { name: 'Option 3', code: 'O3' },
    ]

    // Button Components
    const splitButtonItems = [
      { label: 'Update', icon: 'pi pi-refresh' },
      { label: 'Delete', icon: 'pi pi-times' },
      { label: 'Home', icon: 'pi pi-home' }
    ]

    const speedDialItems = [
      { label: 'Add', icon: 'pi pi-pencil' },
      { label: 'Update', icon: 'pi pi-refresh' },
      { label: 'Delete', icon: 'pi pi-trash' },
      { label: 'Upload', icon: 'pi pi-upload' },
    ]

    // Data Components
    const tableData = [
      { id: 1, name: 'Product A', category: 'Electronics', quantity: 10 },
      { id: 2, name: 'Product B', category: 'Clothing', quantity: 20 },
      { id: 3, name: 'Product C', category: 'Electronics', quantity: 15 },
      { id: 4, name: 'Product D', category: 'Food', quantity: 50 },
      { id: 5, name: 'Product E', category: 'Clothing', quantity: 25 },
    ]

    const treeNodes = [
      {
        key: '0',
        label: 'Documents',
        children: [
          { key: '0-0', label: 'Work' },
          { key: '0-1', label: 'Home' },
        ],
      },
      {
        key: '1',
        label: 'Events',
        children: [
          { key: '1-0', label: 'Meeting' },
          { key: '1-1', label: 'Party' },
        ],
      },
    ]

    const treeTableNodes = [
      {
        key: '0',
        data: { name: 'Documents', size: '75kb', type: 'Folder' },
        children: [
          { key: '0-0', data: { name: 'Work', size: '55kb', type: 'Folder' } },
          { key: '0-1', data: { name: 'Home', size: '20kb', type: 'Folder' } },
        ],
      },
      {
        key: '1',
        data: { name: 'Events', size: '100kb', type: 'Folder' },
        children: [
          { key: '1-0', data: { name: 'Meeting', size: '50kb', type: 'Folder' } },
          { key: '1-1', data: { name: 'Party', size: '50kb', type: 'Folder' } },
        ],
      },
    ]

    // Overlay Components
    const dialogVisible = ref(false)
    const visibleSidebar = ref(false)

    const showDialog = () => {
      dialogVisible.value = true
    }

    const toggle = (event) => {
      this.$refs.op.toggle(event)
    }

    // Menu Components
    const menuItems = [
      { label: 'New', icon: 'pi pi-fw pi-plus' },
      { label: 'Open', icon: 'pi pi-fw pi-download' },
      { label: 'Save', icon: 'pi pi-fw pi-save' }
    ]

    const menubarItems = [
      {
        label: 'File',
        items: [
          { label: 'New', icon: 'pi pi-fw pi-plus' },
          { label: 'Open', icon: 'pi pi-fw pi-download' },
          { label: 'Save', icon: 'pi pi-fw pi-save' }
        ]
      },
      {
        label: 'Edit',
        items: [
          { label: 'Cut', icon: 'pi pi-fw pi-cut' },
          { label: 'Copy', icon: 'pi pi-fw pi-copy' },
          { label: 'Paste', icon: 'pi pi-fw pi-paste' }
        ]
      }
    ]

    const tieredMenuItems = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              { label: 'Document', icon: 'pi pi-fw pi-file' },
              { label: 'Image', icon: 'pi pi-fw pi-image' }
            ]
          },
          { label: 'Open', icon: 'pi pi-fw pi-external-link' },
          { separator: true },
          { label: 'Quit', icon: 'pi pi-fw pi-times' }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Cut', icon: 'pi pi-fw pi-cut' },
          { label: 'Copy', icon: 'pi pi-fw pi-copy' },
          { label: 'Paste', icon: 'pi pi-fw pi-paste' }
        ]
      }
    ]

    const contextMenuItems = [
      { label: 'View', icon: 'pi pi-fw pi-search' },
      { label: 'Delete', icon: 'pi pi-fw pi-trash' }
    ]

    const onContextMenu = (event) => {
      this.$refs.cm.show(event)
    }

    // Chart Components
    const chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Sales',
          data: [12, 19, 3, 5, 2, 3, 9],
          backgroundColor: '#42A5F5',
        },
      ],
    }

    const chartOptions = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    }

    // Messages
    const showToast = () => {
      toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 })
    }

    // Media Components
    const carouselItems = [
      { name: 'Product 1', price: '$50', image: 'https://via.placeholder.com/150' },
      { name: 'Product 2', price: '$80', image: 'https://via.placeholder.com/150' },
      { name: 'Product 3', price: '$70', image: 'https://via.placeholder.com/150' },
    ]

    const galleriaItems = [
      { itemImageSrc: 'https://via.placeholder.com/640x480', thumbnailImageSrc: 'https://via.placeholder.com/150', alt: 'Image 1' },
      { itemImageSrc: 'https://via.placeholder.com/640x480', thumbnailImageSrc: 'https://via.placeholder.com/150', alt: 'Image 2' },
      { itemImageSrc: 'https://via.placeholder.com/640x480', thumbnailImageSrc: 'https://via.placeholder.com/150', alt: 'Image 3' },
    ]

    const galleriaResponsiveOptions = [
      {
        breakpoint: '991px',
        numVisible: 4
      },
      {
        breakpoint: '767px',
        numVisible: 3
      },
      {
        breakpoint: '575px',
        numVisible: 1
      }
    ]
    
    const filteredCities = ref([
      { name: 'New York' },
      { name: 'Los Angeles' },
      { name: 'Chicago' },
      { name: 'Houston' },
      { name: 'Phoenix' }
    ]);

    const timelineData = ref([
  {
    date: '2024-01-01',
    title: 'New Year Celebration',
    content: 'Celebrated the New Year with family and friends.'
  },
  {
    date: '2024-02-14',
    title: 'Valentine’s Day',
    content: 'Went on a lovely date with my partner.'
  },
  {
    date: '2024-03-17',
    title: 'St. Patrick’s Day',
    content: 'Attended a parade and enjoyed the festive atmosphere.'
  },
  {
    date: '2024-07-04',
    title: 'Independence Day',
    content: 'Watched fireworks and celebrated with a BBQ party.'
  }
]);
const breadcrumbItems = ref([
  { label: 'Home', url: '/' },
  { label: 'Category', url: '/category' },
  { label: 'Product', url: '/category/product' }
]);
const dockItems = ref([
  {
    label: 'Finder',
    icon: 'https://primefaces.org/cdn/primereact/images/dock/finder.svg',
    command: () => console.log('Finder clicked')
  },
  {
    label: 'App Store',
    icon: 'https://primefaces.org/cdn/primereact/images/dock/appstore.svg',
    command: () => console.log('App Store clicked')
  },
  {
    label: 'Safari',
    icon: 'https://primefaces.org/cdn/primereact/images/dock/safari.svg',
    command: () => console.log('Safari clicked')
  },
  {
    label: 'Trash',
    icon: 'https://primefaces.org/cdn/primereact/images/dock/trash.png',
    command: () => console.log('Trash clicked')
  }
]);
    return {dockItems,
      breadcrumbItems,
      timelineData,
      filteredCities,
      chipsValue: ['Chip 1', 'Chip 2', 'Chip 3'],
      inputTextValue,
      inputNumberValue,
      inputMaskValue,
      checkboxValue,
      radioValue,
      dropdownValue,
      multiSelectValue,
      textareaValue,
      calendarValue,
      sliderValue,
      ratingValue,
      colorValue,
      toggleValue,
      selectButtonValue,
      dropdownOptions,
      selectButtonOptions,
      splitButtonItems,
      speedDialItems,
      tableData,
      treeNodes,
      treeTableNodes,
      dialogVisible,
      visibleSidebar,
      showDialog,
      toggle,
      menuItems,
      menubarItems,
      tieredMenuItems,
      contextMenuItems,
      onContextMenu,
      chartData,
      chartOptions,
      showToast,
      carouselItems,
      galleriaItems,
      galleriaResponsiveOptions
    }
  }
}
</script>

<style scoped>
.showcase-item {
  @apply bg-white p-4 rounded-lg shadow-md;
}
</style>

