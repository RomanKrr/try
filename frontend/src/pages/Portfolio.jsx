import { useAuthStore } from "../store/useAuthStore";

const Portfolio = ({ fcmToken }) => {
    const {authUser} = useAuthStore();
    return (
        <div>
        <h3>Формування порфоліо для {authUser?.fullName} ти безробітній(</h3>
F
            <p>FCM Token: {fcmToken}</p>
        </div>
    );
}

export default Portfolio;