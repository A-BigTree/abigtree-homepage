import Layout from './components/Layout/Layout';
import ProfileHeader from './components/ProfileHeader/ProfileHeader';
import ProjectSection from './components/ProjectSection/ProjectSection';
import ExperienceSection from './components/Experience/Experience';
import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';
import { useDataLoader } from './hooks/useDataLoader';

function App() {
  const { data, loading, error, refetch } = useDataLoader();

  if (loading) {
    return (
      <Layout>
        <Loading message="加载个人主页..." />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Error error={error} onRetry={refetch} />
      </Layout>
    );
  }

  if (!data) {
    const noDataError: Error = {
      name: 'Error',
      message: '未能加载数据'
    };
    return (
      <Layout>
        <Error error={noDataError} onRetry={() => refetch()} />
      </Layout>
    );
  }

  return (
    <Layout>
      <ProfileHeader profile={data.profile} contacts={data.contacts} skills={data.skills} />
      <ProjectSection projects={data.projects} />
    </Layout>
  );
}

export default App;
