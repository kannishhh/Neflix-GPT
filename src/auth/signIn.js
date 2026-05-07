import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { addUser } from "../stores/userSlice";

export const signInUser = async (email, password, disptach) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { uid, email: userEmail, displayName } = userCredential.user;
    disptach(addUser({ uid, email: userEmail, displayName }));
    return { success: true };
  } catch (error) {
    return { success: false, message: error.code + " " + error.message };
  }
};
