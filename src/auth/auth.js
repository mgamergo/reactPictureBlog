import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);
    }

    async createAccount ({email, password, name, }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)

            if(userAccount) {
                return this.login(email, password)
            } else {
                return
            }
        } catch (error) {
            throw(error);
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession('email@example.com', 'password');
        } catch (error) {
            throw(error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite error:: getCurrentUser Error", error);
        }

        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log('Logout Error', error);
            
        }
    }
}

const authServiece = new AuthServiece()

export default authServiece;