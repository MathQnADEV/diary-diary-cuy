import React from "react";
import Image from "next/image";
import { IDiary } from "@/utils/supabase";
import Link from "next/link";

const PostContent = ({
	diary_id,
    avatar,
    content,
    username,
    email, 
}: IDiary): React.ReactElement => { 
    return (
        <Link
            className="card card-body card-bordered shadow-lg bg-base-300 cursor-pointer duration-300 ease-in-out 
		hover:shadow-xl hover:bg-secondary hover:scale-105 h-72"
            href={`/diary/${diary_id}`}
        >
            <div className="flex items-center gap-4">
                <Image
                    src={avatar as string}
                    width={50}
                    height={50}
                    alt={avatar as string}
                    className="rounded-full bg-primary"
                />
                <p className="font-semibold text-lg">{username || email}</p>
            </div>
            <p className="overflow-y-auto text-md w-2">{content}</p>
        </Link>
    );
};

export default PostContent;
