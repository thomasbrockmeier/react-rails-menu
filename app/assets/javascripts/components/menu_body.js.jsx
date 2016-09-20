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

  deleteCategory(category) {
    var menuCategories = this.state.menuCategories.slice();
    menuCategories.splice(menuCategories.indexOf(category), 1);
    this.replaceState({
      menuCategories: menuCategories
    });
  },

  updateCategory(category, data) {
    var index = this.state.menuCategories.indexOf(category);
    var menuCategories = React.addons.update(this.state.menuCategories,
      { $splice: [[index, 1, category]] });
      console.log(category);
      console.log(data);
    this.replaceState({
      menuCategories: menuCategories
    });
  },

  render(){
    return(
      <div className='menu menu-body'>
        <h1>MENU</h1>
        { this.state.menuCategories.map((menuCategory) => {
          console.log(menuCategory.id);
          return(
            <MenuCategory name={ menuCategory.name }
                          key={ menuCategory.id }
                          menuCategory={ menuCategory }
                          menuItems={ menuCategory.menu_items }
                          handleDeleteCategory={ this.deleteCategory }
                          handleEditCategory={ this.updateCategory }/>
          )
        })}
        <CategoryForm handleNewCategory={this.addCategory} />
      </div>
    )
  }
});
