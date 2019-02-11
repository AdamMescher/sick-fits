import UpdateItem from '../components/UpdateItem/index';

const Update = ({ query }) => (
  <div>
    <UpdateItem id={query.id} />
  </div>
);

export default Update;
