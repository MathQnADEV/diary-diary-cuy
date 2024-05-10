import CreateDiaryForm from "@/components/auth/CreateDiaryForm";
import Wrapper from "@/components/global/Wrapper";
import React from "react";

const page = (): React.ReactElement => {
    return (
        <Wrapper title="BUAT DIARY KAMU SENDIRI YACH, NANTI MANUSIA LAIN AKAN MELIHATNYA">
            <CreateDiaryForm />
        </Wrapper>
    );
};

export default page;
