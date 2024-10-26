import { Button, Input, TextArea } from "@/components/ui";

function LandingPage() {
    return (
        <div className="p-4">
            <h1 className="">test</h1>
            <p>سلام تست 15245 این یک متن تست می باشد</p>
            <p>سلام تست 15245 این یک متن تست می باشد</p>
            <p>سلام تست 15245 این یک متن تست می باشد</p>
            <p>سلام تست 15245 این یک متن تست می باشد</p>
            <p className="text-drd-primary">سلام تست 15151</p>
            <p className="text-drd-primary">hello test</p>
            <br />
            <br />
            <Button>دکمه تست</Button>
            <br />
            <br />
            <Button>test button</Button>
            <br />
            <br />
            <Button waiting>Create Account</Button>
            <br />
            <br />
            <Input label="Email" placeholder="example@example.com" />
            <br />
            <br />
            <Input
                label="Email"
                placeholder="example@example.com"
                error="error message"
            />
            <br />
            <br />
            <TextArea
                error="wdadasd"
                label="Description"
                placeholder="Enter description"
            />
        </div>
    );
}

export default LandingPage;
