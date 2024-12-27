import supabase from "@/plugin/supaBaseClients";

export interface IUser {
  id: number;
  displayName: string;

}

class AuthService {
  async login(userName: string, password: string): Promise<boolean> {

    const { error } = await supabase.auth.signInWithPassword({
      email: userName,
      password: password
    });

    if (error) {
      return false;
    }
    return true;
  }

  async logout(): Promise<boolean> {
    await supabase.auth.signOut();
    return true;
  }

  async getUser(): Promise<IUser | null> {
    const { data } = await supabase.auth.getUser();

    const user = data.user;
    return {
      id: 1,
      displayName: user!.email! as string
    };
  }

  async isAuth(): Promise<boolean> {
    const { data } = await supabase.auth.getSession();
    if (data.session) {
      return true;
    }
    else {
      return false;
    }
  }
}

export default new AuthService();
