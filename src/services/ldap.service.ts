import { authenticate } from 'ldap-authentication';

async function ldapAuth(username: string, password: string) {
    const config = {
        ldapOpts: {
            url: 'ldap://127.0.0.1:389',
            tlsOptions: { rejectUnauthorized: false }
        },
        userDn: `cn=${username}@unal.edu.co,ou=sa,dc=arqsoft,dc=unal,dc=edu,dc=co`,
        userPassword: password,
    };
    return await authenticate(config);
}

export default ldapAuth;