interface loginRq {
  username: string;
  password: string;
}

interface loginRs {
  desc: string;
  token: {
    refreshToken: string;
    accessToken: string;
  };
  code: string;
}

interface JoinRq {
  m_username: string;
  m_pass: string;
  m_name: string;
  m_gender: string;
  m_nickname: string;
  m_birth: string;
  m_phone: string;
  m_addr: string;
  m_email: string;
}
export type { loginRq, loginRs };
