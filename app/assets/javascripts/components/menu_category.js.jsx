var MenuCategory = React.createClass({
  getDefaultProps() {
    return {
      menuItems: []
    }
  },

  getInitialState() {
    return {
      edit: false
    }
  },

  handleDelete(e) {
    e.preventDefault();
    $.ajax({
        method: 'DELETE',
        url: '/api/v1/menu_categories/' + this.props.id,
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

  renderedCategory() {
    if (this.state.edit) {
      return this.categoryForm();
    } else {
      return this.categoryRow();
    }
  },

  categoryRow() {
    return(
      <div>
        <table>
          <thead>
            <tr>
              <th className='item-name'>
                { this.props.name }
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
          </thead>
          <tbody>
            { this.menuItems() }
          </tbody>
        </table>
      </div>
    );
  },

  categoryForm() {
    return(
      <div>
        <table>
          <thead>
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
              <th className='item-price'>Price</th>
              <th className='options'></th>
            </tr>
          </thead>
          <tbody>
            { this.menuItems() }
          </tbody>
        </table>
      </div>
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
    return this.renderedCategory();
  }
});
