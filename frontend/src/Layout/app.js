import NoteHeader from '../components/NoteHeader';
import { Layout } from 'antd';
 import LayoutRoutes from '../components/LayoutRoutes';

const { Content, Footer } = Layout;


const AppLayout = () => {

  return (
    <Layout className="mainLayout">
        <NoteHeader  />
      <Content style={{ marginTop: '100px' }}>
        <LayoutRoutes />
        {/* <FormList /> */}
      </Content>
      {/* <Footer> */}
      {/* <NoteFooter /> */}
      {/* </Footer> */}
    </Layout>
  )
}

export default AppLayout;
