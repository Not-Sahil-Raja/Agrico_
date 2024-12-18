import React from "react";

const BlogPreview = ({ title, shortDescription, description, tags, image }) => {
  return title.length > 0 ||
    description ||
    tags.length > 0 ||
    image.length > 0 ? (
    <div className=" flex flex-col px-10 selection:bg-[#a6bb6d] selection:text-white">
      <div className=" my-3 justify-center items-center flex gap-2">
        {tags.length > 0 && (
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center gap-1 px-2 py-1 bg-[#f6fae5] text-[#393f35] shadow rounded-xl"
              >
                <span className="text-sm font-semibold">{tag}</span>
              </div>
            ))}
          </div>
        )}
        <div>
          {(() => {
            const currentDate = new Date();
            const options = { month: "long", day: "numeric", year: "numeric" };
            const formattedDate = currentDate.toLocaleDateString(
              undefined,
              options
            );
            return (
              <div className="text-sm text-gray-500 font-semibold ml-3">
                {formattedDate}
              </div>
            );
          })()}
        </div>
      </div>
      <div className=" mb-3">
        {title.length > 0 && (
          <h1 className="text-4xl py-2 px-20 text-center text-wrap overflow-hidden font-Archivo font-semibold text-black/85 ">
            {title}
          </h1>
        )}
      </div>

      <div
        className="text-lg text-black/65 font-medium font-Archivo text-center"
        style={{ whiteSpace: "pre-line" }}
      >
        {shortDescription}
      </div>

      <div className=" my-4">
        {image[0] && (
          <img
            src={image[0].name ? URL.createObjectURL(image[0]) : image[0]}
            alt={`${title.length > 0 ? title : "blog"} cover image`}
            className="w-full h-96 object-cover rounded"
          />
        )}
      </div>

      <div className=" mt-6">
        {/* the prose class is used to style the description text in the preview and going to style that later */}
        {description && (
          <article
            dangerouslySetInnerHTML={{ __html: description }}
            className="prose  prose-p:m-0 prose-headings:m-0 prose-headings:mb-1 prose-li:text-lg prose-li:font-semibold marker:font-bold marker:text-black prose-li:text-black prose-a:text-blue-700 w-full  overflow-hidden break-words leading-tight font-NunitoSans text-wrap"
          />
        )}
      </div>
      <div className=" flex gap-1">
        {image.slice(1).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${title.length > 0 ? title : "blog"} cover image`}
            className="w-1/2 h-48 object-cover rounded my-3"
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-4 p-4 font-semibold text-black/55 justify-center items-center">
      Add some content to see the preview
    </div>
  );
};

export default BlogPreview;
