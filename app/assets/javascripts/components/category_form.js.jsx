var CategoryForm = React.createClass({
  getInitialState: function() {
    return {
      name: ''
    };
  },

  handleChange: function(e) {
    var obj = {};
    obj[e.target.name] = e.target.value;
    this.setState(obj);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    $.post('/api/v1/menu_categories',
           { menu_category: this.state },
           (data) => {
             this.props.handleNewCategory(data);
             this.setState(this.getInitialState());
           }.bind(this),
           'JSON'
    );
  },

  render: function() {
    return(
      <form className='menu category-form' onSubmit={ this.handleSubmit }>
        <input type='text'
               className='menu category-input'
               placeholder='New Category'
               name='name'
               value={ this.state.name }
               onChange={ this.handleChange } />
      </form>
    );
  }
});
