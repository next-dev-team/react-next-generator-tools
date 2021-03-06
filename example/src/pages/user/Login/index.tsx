import Footer from '@/components/Footer';
import NextLayout from '@/components/NextLayout';
import NextSignIn from '@next-dev/component/es/Auth/SignIn';
import { Space } from 'antd';
import React from 'react';
import { Link } from 'umi';
import styles from './index.less';
import { useLogin } from './useLogin';

const Login: React.FC = () => {
  const { onLogin, loadingLogin, loadingRequestApiKey } = useLogin();

  return (
    <div className={styles.container}>
      <NextLayout
        isEmptyLayout
        style={{ paddingTop: '3%' }}
        contentInnerStyle={{ minHeight: '65vh' }}
        cardProps={{ bodyStyle: { backgroundColor: 'transparent' } }}
        pageHeaderRender={() => {
          return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Space direction="vertical" align="center" size="small">
                <Link to="/">
                  <img alt="logo" className={styles.logo} src="/logo.svg" />
                  <span className={styles.title}> Next Dev</span>
                </Link>
                <div className={styles.desc}>
                  Next Dev Boilerplate product ready front-end application framework.
                </div>
              </Space>
            </div>
          );
        }}
      >
        <NextSignIn
          {...{
            onFinish: onLogin,
            next: {
              forgotPassPath: '/d',
              registerPath: 'd',
              showRegister: true,
              isHasRemember: true,
              isWithoutEmail: true,
              verifyLink: 'dd',
              submitBtnProps: {
                loading: loadingLogin || loadingRequestApiKey,
              },
            },
          }}
        />
      </NextLayout>
      <Footer />
    </div>
  );
};

export default Login;
