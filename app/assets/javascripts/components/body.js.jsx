var Body = React.createClass({
  getInitialState() {
    return {
      menuCategories: []
    }

  },

  componentDidMount() {
    $.getJSON(
      '/api/v1/menu_categories.json',
      (r) => {  this.setState({ menuCategories: r })  }
    );
  },

  render(){
    var menuCategories = this.state.menuCategories.map((menuCategory) => {
      return(
        <div key={ `category-${ menuCategory.id }` }
             className='menu menu-category'>

          <MenuCategory name={ menuCategory.name }
                        menuItems={ menuCategory.menu_items }/>
        </div>
      )
    });

    return(
      <div className='menu menu-body'>
        { menuCategories }
      </div>
    )
  }
});
