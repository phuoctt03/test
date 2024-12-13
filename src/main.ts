import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dropdown from 'primevue/dropdown'
import Calendar from 'primevue/calendar'
import Slider from 'primevue/slider'
import ToggleButton from 'primevue/togglebutton'
import InputNumber from 'primevue/inputnumber'
import ProgressBar from 'primevue/progressbar'
import Card from 'primevue/card'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import { RadioButton } from 'primevue';
import MultiSelect from 'primevue/multiselect';
import Chips from 'primevue/chips';
import Rating from 'primevue/rating';
import 'primeicons/primeicons.css'
import ColorPicker from 'primevue/colorpicker';
import SelectButton from 'primevue/selectbutton';
import SplitButton from 'primevue/splitbutton';
import SpeedDial from 'primevue/speeddial';
import Tree from 'primevue/tree';
import TreeTable from 'primevue/treetable';
import Panel from 'primevue/panel';
import Fieldset from 'primevue/fieldset';
import OverlayPanel from 'primevue/overlaypanel';
import Dialog from 'primevue/dialog';
import Sidebar from 'primevue/sidebar';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import TieredMenu from 'primevue/tieredmenu';
import ContextMenu from 'primevue/contextmenu';
import Message from 'primevue/message';
import Carousel from 'primevue/carousel';
import Galleria from 'primevue/galleria';
import AutoComplete from 'primevue/autocomplete';
import Breadcrumb from 'primevue/breadcrumb';
import Chip from 'primevue/chip';
import InputSwitch from 'primevue/inputswitch';
import InlineMessage from 'primevue/inlinemessage';
import InputGroup from 'primevue/inputgroup';
import Timeline from 'primevue/timeline';
import Dock from 'primevue/dock';
const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(ToastService)
app.component('Dock', Dock)
app.component('Timeline', Timeline)
app.component('InputGroup', InputGroup)
app.component('InlineMessage', InlineMessage)
app.component('InputSwitch', InputSwitch)
app.component('Chip', Chip)
app.component('Breadcrumb', Breadcrumb)
app.component('AutoComplete', AutoComplete)
app.component('Galleria', Galleria)
app.component('Carousel', Carousel)
app.component('Message', Message)   
app.component('ContextMenu', ContextMenu)
app.component('TieredMenu', TieredMenu)
app.component('Menubar', Menubar)
app.component('Menu', Menu)
app.component('Sidebar', Sidebar)
app.component('Dialog', Dialog)
app.component('OverlayPanel', OverlayPanel)
app.component('Fieldset', Fieldset)
app.component('Panel', Panel)
app.component('Tree', Tree)
app.component('TreeTable', TreeTable)
app.component('SpeedDial', SpeedDial)
app.component('SplitButton', SplitButton)
app.component('SelectButton', SelectButton)
app.component('ColorPicker', ColorPicker)
app.component('Rating', Rating)
app.component('Chips', Chips)
app.component('MultiSelect', MultiSelect)
app.component('RadioButton', RadioButton)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Dropdown', Dropdown)
app.component('Calendar', Calendar)
app.component('Slider', Slider)
app.component('ToggleButton', ToggleButton)
app.component('InputNumber', InputNumber)
app.component('ProgressBar', ProgressBar)
app.component('Card', Card)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('Accordion', Accordion)
app.component('AccordionTab', AccordionTab)
app.component('Toast', Toast)
app.use(router);
app.mount('#app');
