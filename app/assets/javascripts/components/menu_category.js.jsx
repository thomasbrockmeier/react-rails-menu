var MenuCategory = React.createClass({
  getDefaultProps() {
    return {
      menuItems: []
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

  render() {
    var menuItems = this.props.menuItems.map(  ( menuItem ) => {
      return ( <MenuItem key={ `category-${ menuItem.id }` }
        menuItem={ menuItem } /> )
      });

    return (
        <div>
          <table>
            <thead>
              <tr>
                <th className='item-name'>
                  { this.props.name }
                  <button className='button button-delete'
                          onClick={ this.handleDelete }>Delete</button>
                </th>
                <th className='item-price'>Price</th>
                <th className='options'></th>
              </tr>
            </thead>
            <tbody>
              { menuItems }
            </tbody>
          </table>
        </div>
      )
    }
});
