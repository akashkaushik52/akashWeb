export default {
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
  ],
};
