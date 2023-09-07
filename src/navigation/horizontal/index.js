const navigation = () => [
  {
    title: 'Home',
    path: '/home',
    icon: 'mdi:home-outline'
  },
  {
    path: '/reports',
    action: 'read',
    subject: 'Reports-page',
    title: 'Reports',
    icon: 'fluent-mdl2:b-i-dashboard',
    children: [
      {
        title: 'Income',
        icon: 'material-symbols:account-balance-wallet',
        path: '/reports/income'
      },
      {
        title: 'Usage',
        icon: 'vaadin:cart',
        path: '/reports/usage'
      }
    ]
  },
  {
    title: 'Committee Members',
    path: '/founders',
    icon: 'mdi:account-group'
  },
  {
    title: 'NotePad+',
    path: '/notepad',
    icon: 'fluent:notepad-edit-16-regular'
  },
  {
    title: 'schedule',
    path: '/schedule',
    icon: 'emojione-v1:spiral-notepad'
  }
]

export default navigation
