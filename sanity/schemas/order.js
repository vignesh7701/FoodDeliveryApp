export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      options: {
        maxLength: 40,
      },
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      options: {
        maxLength: 15,
      },
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      options: {
        maxLength: 100,
        },
      },

      {
          name: 'method',
          title: 'Payment Method',    
            type: 'number',
      },
      {
          name: 'total',
          title: 'Total',
            type: 'number',
      },
      {
          name: 'status',
          title: 'Status',
            type: 'number',
      },
  ],
}
