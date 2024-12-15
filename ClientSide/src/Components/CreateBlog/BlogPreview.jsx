import { Tag } from "lucide-react";
import React, { useEffect } from "react";

const BlogPreview = ({ title, description, tags, image }) => {
  useEffect(() => {
    console.log(title, description, tags, image);
  }, [title, description, tags, image]);
  return title.length > 0 ||
    description ||
    tags.length > 0 ||
    image.length > 0 ? (
    <div className=" flex flex-col">
      <div className=" mb-3">
        {title.length > 0 && (
          <h1 className="text-xl py-2 first-letter:text-3xl font-semibold text-black/85 uppercase">
            {title}
          </h1>
        )}
      </div>

      <div>
        {image[0] && (
          <img
            src={image[0]}
            alt={`${title.length > 0 ? title : "blog"} cover image`}
            className="w-full h-96 object-cover rounded"
          />
        )}
      </div>
      <div className=" my-3">
        {tags.length > 0 && (
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center gap-1 px-2 py-1 bg-stone-800 text-stone-200 rounded-md"
              >
                <Tag size={16} />
                <span className="text-sm font-semibold">{tag}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className=" mt-6">
        {/* the prose class is used to style the description text in the preview and going to style that later */}
        {description && (
          <article
            dangerouslySetInnerHTML={{ __html: description }}
            className="prose leading-none prose-p:m-0 prose-headings:m-0 prose-a:text-blue-700 w-full text-wrap overflow-hidden break-words"
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
