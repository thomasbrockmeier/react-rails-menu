var MenuBody = React.createClass({
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

  addCategory(category) {
    var menuCategories = React.addons.update(this.state.menuCategories,
      { $push: [category] });
    this.setState({ menuCategories: menuCategories });
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
        <h1>MENU</h1>
        { menuCategories }
        <CategoryForm handleNewCategory={this.addCategory} />
      </div>
    )
  }
});
