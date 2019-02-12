import SingleItem from '../components/SingleItem/index';

const Item = ({ query }) => (
  <div>
    <SingleItem id={query.id} />
  </div>
);

export default Item;
