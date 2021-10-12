/* eslint-disable no-undef */
import axios from "axios";
jest.mock("axios");

export interface Posts {
  id: number,
  body: String,
  title: String,
  userId:number
}

it("returns the title of the first album", async () => {
  const expectedResult: Posts = {
    body: "Abcs D",
    id: 1,
    title: "My First Album",
    userId: 3
  };

  (axios.get as jest.Mock).mockReturnValueOnce({ data: expectedResult });
  const post = require("../util/utils");
  const data = await post.getPostData(); // Run the function
  expect(data).toEqual(expectedResult); // Make an assertion on the result
  expect(data).toMatchSnapshot();
});

// https://www.youtube.com/watch?v=RYQE5X6lhis
// https://stackoverflow.com/questions/51495473/typescript-and-jest-avoiding-type-errors-on-mocked-functions
