var MenuItem = React.createClass({
    render() {
        return (
            <tr>
                <td className='item-name'>
                  { this.props.menuItem.name }
                </td>
                <td className='item-price'>
                  { formatPrice(this.props.menuItem.price) }
                </td>
            </tr>
        )
    }
});
