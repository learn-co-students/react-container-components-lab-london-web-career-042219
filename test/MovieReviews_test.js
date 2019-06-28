import React from "react";
import { expect } from "chai";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieReviews from "../src/components/MovieReviews";
import testReviews from "./test-reviews";

Enzyme.configure({ adapter: new Adapter() });

const Noop = props => {
  return <p>Noop</p>;
};

describe("<MovieReviews />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = !MovieReviews.prototype
      ? shallow(<Noop />)
      : shallow(<MovieReviews reviews={testReviews} />);
  });
});
