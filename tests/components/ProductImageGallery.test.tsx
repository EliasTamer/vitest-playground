import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should render nothing if given an empty array", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should contain images with the proper sources", () => {
    const imageUrls = ["image-1.png", "image-2.png"];

    render(<ProductImageGallery imageUrls={imageUrls} />);


   const images = screen.getAllByRole('img')

    expect(images).toHaveLength(2);

    imageUrls.forEach((url, index)=> {
        expect(images[index]).toHaveAttribute('src', imageUrls[index])
    })

  });
});
