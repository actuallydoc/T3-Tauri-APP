"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

const handleLogin: () => void = () => {
    signIn().then((res) => {
        console.log(res);
    }
    )
        .catch((err) => {
            console.log(err);
        })

}
const handleLogout: () => void = () => {
    signOut().then((res) => {
        console.log(res);
    }
    )
        .catch((err) => {
            console.log(err);
        })

}

export const LoginButton = () => {
    return (
        <button style={{ marginRight: 10 }} onClick={handleLogin}>
            Sign in
        </button>
    );
};



export const LogoutButton = () => {
    return (
        <button onClick={handleLogout}>
            Sign Out
        </button>
    );
};

export const ProfileButton = () => {
    return <Link href="/profile">Profile</Link>;
};
