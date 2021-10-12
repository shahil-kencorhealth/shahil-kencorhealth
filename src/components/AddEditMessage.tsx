import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useFormik } from "formik";
import { AddEditMessageSchema } from "../validationScrema/user";

export function AddEdit ({ modal, toggle, post, onAddEditClick }: any) {
//   const [posts, setposts] = useState({ title: post.title, body: post.body });
//   useEffect(() => {
//     setposts(post);
//   }, [post]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: post.title, //  "abc@gmail.com",
      body: post.body // "abcxyz"
    },
    validationSchema: AddEditMessageSchema,
    onSubmit: (values) => {
      // dispatch(login());
      onAddEditClick(values);
    }
  });
  const { errors, touched } = formik;
  return (
        <Modal isOpen={modal} toggle={toggle} >
        <form>
      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
                {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
                <input type="text" className="form-control" placeholder="title"
                    name="title"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                />
                {errors.title && touched.title && (
                    <div className="text-danger mt-2">{errors.title}</div>)}

                <br />
                <textarea rows={5} cols={9} className="form-control" placeholder="description"
                    name="body"
                    onInput={formik.handleChange}
                    onBlurCapture={formik.handleBlur}
                  value={formik.values.body}
                > </textarea>

                {errors.body && touched.body && (
                    <div className="text-danger mt-2">{errors.body}</div>)}

            </ModalBody>
            <ModalFooter>
            <Button type="button" onClick={() => formik.handleSubmit()} color="primary" >{post?.id ? "Edit" : "Add"} </Button>{" "}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
        </form>
        </Modal>
  );
}
