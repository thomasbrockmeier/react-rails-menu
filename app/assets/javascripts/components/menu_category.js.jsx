var MenuCategory = React.createClass({
  getDefaultProps() {
    return {
      menuItems: []
    }
  },

  getInitialState() {
    return {
      addingItem : false,
      edit: false
    }
  },

  handleAddItem(e) {
    e.preventDefault();
    this.setState({ addingItem: true });
  },

  handleDelete(e) {
    e.preventDefault();
    $.ajax({
        method: 'DELETE',
        url: '/api/v1/menu_categories/' + this.props.menuCategory.id,
        dataType: 'JSON',
        success: function() {
          this.props.handleDeleteCategory(this.props.menuCategory);
        }.bind(this)
    });
  },

  handleEdit(e) {
    e.preventDefault();
    var data = this.props.menuCategory;
    data.name = ReactDOM.findDOMNode(this.refs.name).value;
    $.ajax({
        method: 'PUT',
        url: '/api/v1/menu_categories/' + this.props.menuCategory.id,
        dataType: 'JSON',
        data: { menu_category: data },
        success: function() {
          this.setState({edit: false});
          this.props.handleEditCategory(this.props.menuCategory, data);
        }.bind(this)
    });
  },

  handleToggle(e) {
    e.preventDefault();
    this.setState({edit: !this.state.edit});
  },

  newItem(category, data) {
    this.props.handleNewItem(category, data);
    this.setState({addingItem: false})
  },

  renderedCategory() {
    if (this.state.edit) {
      return this.categoryForm();
    } else {
      return this.categoryRow();
    }
  },

  renderedForm() {
    if (this.state.addingItem) {
      return (<ItemForm menuCategory={ this.props.menuCategory }
                        handleNewItem={ this.newItem } />);
    }
  },

  categoryRow() {
    return(
      <tr>
        <th className='item-name'>
          { this.props.name }
          <button className='btn btn-flat add'
            onClick={ this.handleAddItem }>
            Add
          </button>
          <button className='btn btn-flat edit'
            onClick={ this.handleToggle }>
            Edit
          </button>
          <button className='btn btn-flat delete'
                  onClick={ this.handleDelete }>
                  Delete
          </button>
        </th>
        <th className='item-price'>Price</th>
        <th className='options'></th>
      </tr>
    );
  },

  categoryForm() {
    return(
      <tr>
        <th className='item-name'>
          <input type='text'
                 className='menu category-input'
                 ref='name'
                 defaultValue={ this.props.name } />
          <button className='btn btn-flat edit'
            onClick={ this.handleEdit }>
            Update
          </button>
          <button className='btn btn-flat delete'
                  onClick={ this.handleToggle }>
                  Cancel
          </button>
        </th>
        <th className='item-price'>
          Price
        </th>
      </tr>
    );
  },

  menuItems() {
    return this.props.menuItems.map( ( menuItem ) => {
      return (
        <MenuItem key={ `category-${ menuItem.id }` } menuItem={ menuItem } />
      );
    });
  },

  render() {
    return (
      <div>
        <table>
          <thead>
            { this.renderedCategory() }
          </thead>
          <tbody>
            { this.menuItems() }
          </tbody>
        </table>
        { this.renderedForm() }
      </div>
    );
  }
});
