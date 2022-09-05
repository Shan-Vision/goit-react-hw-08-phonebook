const contactsSelectors = {
  getContacts: state => state.contacts.items,
  getFilter: state => state.contacts.filter,
  getContactsLoading: state => state.contacts.isLoading,
};

export default contactsSelectors;
