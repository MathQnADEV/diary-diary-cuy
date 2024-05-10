"use server"

import { getUserData } from "@/utils/clerk";
import { redirect } from "next/navigation";
import { supabase, IDiary } from "@/utils/supabase";
import { Redirect } from "next";

/** 
! REQUIREMENTS of diary tables:
	USER: email, username, avatar
	DIARY: content, comments? 

*/ 

export const createDiaryAction = async (formData: FormData): Promise<Redirect> => {
    "use server";
    const content = formData.get("content") as string;
	const { avatar, email, username } = await getUserData()
	
	const data: IDiary = {
		content,
		email,
		username,
		avatar,
	}

	await supabase.from("diary").insert(data)
	
	redirect("/dashboard/my-diary")
};
