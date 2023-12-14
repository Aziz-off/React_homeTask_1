import React, { useState } from "react";
import "./Task2.css";

const Task2 = () => {
  const [isTrue, setIsTrue] = useState(true);
  const toggleValue = () => {
    setIsTrue((prevState) => !prevState);
  };

  return (
    <div>
      <button className="btn" onClick={toggleValue}>
        CHANGE INNER HTML
      </button>

      {isTrue ? (
        <div className="first">
          <h2>Верстка 1</h2>
          <div className="cards">
            <div className="card">
              <h3>Some title 1</h3>
              <img
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                alt=""
              />
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, saepe!
              </span>
              <div>
                <button className="btn">View</button>
              </div>
            </div>

            <div className="card">
              <h3>Some title 2</h3>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1rARdKWopb7On1bDS5hH5_7bjT7ZH1n1U-Fb-ysCpA&s"
                alt=""
              />
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, saepe!
              </span>
              <div>
                <button className="btn">View</button>
              </div>
            </div>

            <div className="card">
              <h3>Some title 3</h3>
              <img
                src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"
                alt=""
              />
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, saepe!
              </span>
              <div>
                <button className="btn">View</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="second">
          <h2>Верстка 2</h2>
          <div className="section">
            <div className="block">
              <img
                src="https://img.lovepik.com/photo/20211121/large/lovepik-rain-picture_500602405.jpg"
                alt=""
              />
            </div>
            <div className="block">
              <h3 className="title">SOME TITLE</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                eveniet quasi, delectus numquam dicta fuga alias ad quaerat cum
                facere inventore voluptatem corrupti odio, perspiciatis nam
                tempore temporibus deleniti maiores. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Labore dolorum cumque temporibus?
                Ab similique facilis quia sapiente, itaque ducimus nobis totam
                accusamus porro deleniti expedita eligendi asperiores veritatis
                quod, dignissimos aut id necessitatibus! Quod a corrupti
                suscipit, sunt officiis modi est eaque assumenda ipsam ex
                accusamus iusto consectetur, iste voluptatibus exercitationem
                reiciendis? Aliquam consectetur minima corrupti dolores ratione
                blanditiis magni. Molestias eaque repellat harum. Error ipsam
                similique eos vero vitae hic voluptatum harum qui, quis tenetur
                incidunt laboriosam omnis doloribus eligendi at ratione
                consequuntur repellendus porro ipsa magni odio officia
                praesentium dolamus, minima voluptates id tenetur ex fugit in ab
                hic quas neque laboriosam. Placeat dolorum ut est, maxime
                dolores nam quam. Repellat deserunt odio nostrum illo quos ipsam
                vitae nisi non omnis, dolore tempora numquam impedit rerum
                architecto. Aliquam, facilis sit fugit ullam error dolore
                aspernatur. Quidem unde cupiditate enim eum dolor neque illo
                perferendis placeat, voluptate incidunt, pariatur esse, earum
                beatae numquam blanditiis. Deserunt blanditiis perferendis iste
                asperiores rerum esse quos, unde cum possimus quis atque enim
                ipsum nemo, dolores, odio inventore delectus eligendi ullam?
                Asperiores neque quibusdam illo omnis at magni veritatis
                voluptatem cum accusantium, aperiam, voluptas libero dolorum
                ipsum labore impedit placeat, repudiandae iusto exercitationem
                expedita ab? Animi adipisci explicabo unde quaerat excepturi
                fuga illum qui nisi quis reiciendis iusto, in doloribus nobis
                aliquid omnis veritatis nemo expedita numquam ratione dolores
                eos. Cum saepe veniam fuga ea, similique, voluptatum doloremque
                blanditiis perspiciatis optio natus soluta laborum et.
                Dignissimos doloribus assumenda quaerat impedit similique
                molestias libero quos. Voluptas cupiditate vero laboriosam
                suscipit tenetur commodi dolore magni corporis enim provident,
                ab iure doloremque ea assumenda temporibus officiis vitae
                accusantium itaque quasi ex nihil veniam deleniti maiores? Quis
                assumenda alias vero facilis deleniti est fuga. Saepe natus,
                explicabo voluptate minus perspiciatis voluptatem officia sunt
                aliquam et autem esse fugiat aperiam aliquid qui quaerat!
                Consectetur quidem quibusdam nemo. Sed dolores adipisci, quaerat
                tenetur magnam dignissimos voluptates molestias minus
                necessitatibus numquam. Ab dicta hic nisi veniam, aspernatur ut
                illum et error fuga veritatis natus quis laudantium? Totam
                facilis dolores nostrum repellendus cupiditate eos illo
                voluptatem quisquam tenetur, reprehenderit placeat officiis
                deleniti pariat
              </p>
              <div>
                <button className="btn">Read more</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task2;
