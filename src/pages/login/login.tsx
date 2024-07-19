import { auth } from "../../firebaseConfig";
import {  GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import {useUser} from "../../guard/UserContext";



export function Login() {
    const { user } = useUser();

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithRedirect(auth, provider);
        } catch (error) {
            console.error('Google login error:', error);
        }
    };
    if (user) {
        // Eğer kullanıcı oturum açmışsa, /home sayfasına yönlendirme yapabiliriz
        window.location.href = '/home';
        return null; // Burada hiçbir şey render etmiyoruz, çünkü yönlendirme yapıldı
    }

    return (
        <div>
            <button onClick={handleGoogleLogin}>Login with Google</button>
        </div>
    );
};
