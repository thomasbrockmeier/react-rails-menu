var MenuCategory = React.createClass({
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
                  <th className='item-name'>{ this.props.name }</th>
                  <th className='item-price'>Price</th>
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
