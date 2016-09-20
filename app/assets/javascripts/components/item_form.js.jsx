var ItemForm = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      price: ''
    };
  },

  handleChange: function(e) {
    var obj = {};
    obj[e.target.name] = e.target.value;
    this.setState(obj);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    $.post('/api/v1/menu_categories/'+this.props.menuCategory.id+'/menu_items',
           {
             menu_item: {
               name: this.state.name,
               price: this.state.price,
               menu_category_id: this.props.menuCategory.id
             }
           },
           (data) => {
             this.props.handleNewItem(this.props.menuCategory, data);
            //  this.setState(this.getInitialState());
           }.bind(this),
           'JSON'
    );
  },

  valid: function() {
    return ((this.state.name !== '') && (this.state.price !== null));
  },

  render: function() {
    return(
      <form className='menu item-form' onSubmit={ this.handleSubmit }>
        <input type='text'
               className='menu item-name-input'
               placeholder='Item Name'
               name='name'
               value={ this.state.name }
               onChange={ this.handleChange } />
        <input type='number'
               className='menu item-price-input'
               placeholder='Item Price'
               name='price'
               value={ this.state.price }
               onChange={ this.handleChange } />
        <input type='submit'
               className='btn btn-flat edit'
               value='Add Item'
               disabled={ !this.valid } />
      </form>
    );
  }
});
