import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { addUser } from "../stores/userSlice";

export const signUpUser = async (name, email, password, disptach) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await updateProfile(user, { displayName: name });
    const { uid, email: userEmail, displayName } = auth.currentUser;
    disptach(addUser({ uid, email: userEmail, displayName }));
    return { success: true };
  } catch (error) {
    return { success: false, message: error.code + " " + error.message };
  }
};
