import { IComments, supabase } from "@/utils/supabase";
import Image from "next/image";
import React from "react";

type ParamsProps = {
    diary_id: number;
};

const CommentList = async ({ diary_id }: ParamsProps) => {
    const { data, error } = await supabase
        .from("diary")
        .select("comments")
        .eq("id", diary_id)
        .single(); 

    if (error) return <p>Please Reload the page...</p>;

    return (
        <div className="flex flex-col gap-4 ">
            <div className="divider" />
            {data.comments?.map((comment: IComments) => {
                return (
                    <div
                        className="ml-4 card card-body card-bordered p-4 bg-base-200"
                        key={comment.comment_id}
                    >
                        <Image
                            src={comment.avatar as string}
                            alt={comment.avatar as string}
                            width={50}
                            height={50}
                            className="rounded-full bg-primary"
                        />
                        <p>{comment.content}</p>
                        <p>{comment.username || comment.email}</p>
                    </div>
                );
            })}
            <div className="divider" />
        </div>
    );
};

export default CommentList;
