import DashBoard from '../../screens/DrawerScreens/DashBoard';
import Customers from '../../screens/DrawerScreens/Customers';
import Bills from '../../screens/DrawerScreens/Bills';
import Invoices from '../../screens/DrawerScreens/Invoices';
import Packages from '../../screens/DrawerScreens/Packages';
import Reports from '../../screens/DrawerScreens/Reports';
import SalesOrder from '../../screens/DrawerScreens/SalesOrder';
import Shipments from '../../screens/DrawerScreens/Shipments';
import CompleteProfileCard from '../../components/CompleteProfileCard';

export const DrawerScreens = [
  {
    ScreenName: 'DashBoard',
    Label: 'DashBoard',
    IconName: 'speedometer-slow',
    DrawerComponent: DashBoard,
    HeaderName: 'DashBoard',
    rightIconName1: 'cast-audio',
    rightIconName2: 'bell-ring'
  },
  {
    ScreenName: 'Customers',
    Label: 'Customers',
    IconName: 'account-circle',
    DrawerComponent: Customers,
    HeaderName: 'Customers',
    rightIconName1: 'cast-audio',
    rightIconName2: 'bell-ring'
  },
  {
    ScreenName: 'Bills',
    Label: 'Bills',
    IconName: 'note-text',
    DrawerComponent: Bills,
    HeaderName: 'Bills',
    rightIconName1: 'cast-audio',
    rightIconName2: 'bell-ring'
  },
  {
    ScreenName: 'Invoices',
    Label: 'Invoices',
    IconName: 'file',
    DrawerComponent: Invoices,
    HeaderName: 'Invoices',
    rightIconName1: 'cast-audio',
    rightIconName2: 'bell-ring'
  },
  {
    ScreenName: 'Packages',
    Label: 'Packages',
    IconName: 'package',
    DrawerComponent: Packages,
    HeaderName: 'Packages',
    rightIconName1: 'cast-audio',
    rightIconName2: 'bell-ring'
  },
  {
    ScreenName: 'Reports',
    Label: 'Reports',
    IconName: 'chart-bar',
    DrawerComponent: Reports,
    HeaderName: 'Reports',
    rightIconName1: 'cast-audio',
    rightIconName2: 'bell-ring'
  },
  {
    ScreenName: 'SalesOrder',
    Label: 'SalesOrder',
    IconName: 'chart-line-variant',
    DrawerComponent: SalesOrder,
    HeaderName: 'SalesOrder',
    rightIconName1: 'cast-audio',
    rightIconName2: 'bell-ring'
  },
  {
    ScreenName: 'Shipments',
    Label: 'Shipments',
    IconName: 'shipping-pallet',
    DrawerComponent: Shipments,
    HeaderName: 'Shipments',
    rightIconName1: 'cast-audio',
    rightIconName2: 'bell-ring'
  },
]