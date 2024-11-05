import Input from "./input";

function PersonalInfo({ handleUpdateInfo }) {
  return (
    <article className="infos__container">
      <h1 className="title">Personal information</h1>
      <Input
        name="firstName"
        placeholder="First Name"
        onChange={(event) =>
          handleUpdateInfo(
            event.target.getAttribute("name"),
            event.target.value
          )
        }
      />
      <Input
        name="lastName"
        placeholder="Last Name"
        onChange={(event) =>
          handleUpdateInfo(
            event.target.getAttribute("name"),
            event.target.value
          )
        }
      />
      <Input
        name="title"
        placeholder="Title"
        onChange={(event) =>
          handleUpdateInfo(
            event.target.getAttribute("name"),
            event.target.value
          )
        }
      />
      <label className="photo__label">
        Photo +
        <input
          type="file"
          name="photo"
          className="input__file"
          onChange={(event) =>
            handleUpdateInfo(
              event.target.getAttribute("name"),
              event.target.value
            )
          }
        />
      </label>
      <Input
        name="adress"
        placeholder="Adress"
        onChange={(event) =>
          handleUpdateInfo(
            event.target.getAttribute("name"),
            event.target.value
          )
        }
      />
      <Input
        name="phoneNumber"
        placeholder="Phone number"
        onChange={(event) =>
          handleUpdateInfo(
            event.target.getAttribute("name"),
            event.target.value
          )
        }
      />
      <Input
        name="email"
        placeholder="Email"
        onChange={(event) =>
          handleUpdateInfo(
            event.target.getAttribute("name"),
            event.target.value
          )
        }
      />
      <Input
        name="description"
        placeholder="Description"
        onChange={(event) =>
          handleUpdateInfo(
            event.target.getAttribute("name"),
            event.target.value
          )
        }
      />
    </article>
  );
}

export default PersonalInfo;
