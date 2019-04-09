export class UserModel {

    id: number;
    url: string;
    login: string;
    html_url: string;
    avatar_url: string;

    name: string;
    blog: string;
    created_at: Date;
    updated_at: Date;

    public_repos: number;
    followers: number;
    following: number;

}
