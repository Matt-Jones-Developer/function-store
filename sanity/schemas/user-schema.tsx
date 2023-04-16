const user = {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'password',
      title: 'Password',
      type: 'object',
      fields: [
        {
          name: 'hash',
          title: 'Hashed Password',
          type: 'string',
        },
        {
          name: 'salt',
          title: 'Salt',
          type: 'string',
        },
      ],
    },
  ],
};

export default user;
