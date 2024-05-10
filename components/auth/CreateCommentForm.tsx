"use client";
import { createCommentAction } from "@/actions/createCommentAction";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { RefObject, useRef } from "react";

type ParamsProps = {
    diary_id: number;
};

const CreateCommentForm = ({ diary_id }: ParamsProps): React.ReactElement => {
    const formRef: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);
	const resetForm = (): void => {
		setTimeout(() => {
			formRef.current?.reset()
		},1000)
	};

	const { isLoaded, isSignedIn } = useUser();

	if (!isLoaded) return <p>Please Wait...</p>;

    return isSignedIn ? (
        <form
            action={createCommentAction}
            className="flex flex-col gap-4 mx-auto w-full"
            onSubmit={resetForm}
            ref={formRef}
        >
            <textarea
                placeholder="tuliskan komentaru mu disini..."
                className="h-52 p-4 text-lg border border-primary textarea"
                name="content"
            />
            <input type="hidden" value={diary_id} name="diary_id" />
            <button
                className="btn btn-primary max-w-sm mx-auto w-full"
                type="submit"
            >
                Comment Now
            </button>
        </form>
    ) : (
        <div className="flex flex-col gap-4 mx-auto w-full">
            <Link
                className="btn btn-primary max-w-sm mx-auto w-full"
                href="/sign-in"
            >
                LOGIN DULU YA BANG
            </Link>
        </div>
    );
};

export default CreateCommentForm;
