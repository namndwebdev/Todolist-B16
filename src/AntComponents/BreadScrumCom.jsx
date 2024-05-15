import { Breadcrumb } from 'antd';
const BreadScrumCom = () => (
  <Breadcrumb
    separator={<span> *  </span>}
    items={[
      {
        title: 'Home',
      },
      {
        title: <a href="">tin tic</a>,
      },
      {
        title: <a href="">bong daa</a>,
      },
      {
        title: 'Ngoai hang',
      },
    ]}
  />
);
export default BreadScrumCom;