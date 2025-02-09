import { auth, signOut, signIn } from "@/auth";
import Link from "next/link";

const Navbar = async () => {

    const session = await auth()


    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <h1 className="font-bold text-2xl text-black">StartupDir</h1>
                </Link>
                <div className="flex items-center text-black gap-5">
                    {
                        session && session?.user ? (
                            <>
                                <Link href="/startup/create">
                                    <span>
                                        create
                                    </span>
                                </Link>
                                <form action={async () => {

                                    "use server"
                                    await signOut({ redirectTo: '/' })
                                }}>
                                    <button type="submit">Sign out</button>
                                </form>
                                <Link href={`/user/${session?.id}`}>
                                    <span>
                                        {session?.user?.name}
                                    </span>
                                </Link>
                            </>
                        ) : (
                            <form action={async () => {
                                "use server"
                                await signIn('github')
                            }
                            }
                            >
                                <button type="submit">login</button>
                            </form>
                        )
                    }
                </div>
            </nav>
        </header>
    );
}

export default Navbar;