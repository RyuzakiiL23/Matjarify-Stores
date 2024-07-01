"use client";
import { SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button"

function ProfileInput() {
  return (
    <div className="flex flex-col gap-4 bg-background p-4 shadow-md">
      <div className=" mb-8">personal informations</div>
      <div className="flex w-full gap-2 justify-between relative">
        <div className="flex flex-col w-[48%]">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="border-2 border-gray-300 p-2"
          />
        </div>
        <div className="flex flex-col w-[48%]">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            className="border-2 border-gray-300 p-2"
          />
        </div>
      </div>
      <div className="flex w-full gap-2 justify-between relative">
        <div className="flex flex-col w-[48%]">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            className="border-2 border-gray-300 p-2"
          />
        </div>
        <div className="flex flex-col w-[48%]">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            className="border-2 border-gray-300 p-2"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="adress">Adress</label>
        <input
          type="adress"
          name="adress"
          className="border-2 border-gray-300 p-2"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="border-2 border-gray-300 p-2"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="birth">Birthday</label>
        <input
          type="text"
          name="birth"
          className="border-2 border-gray-300 p-2"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="bio">Bio</label>
        <input
          type="textarea"
          name="bio"
          className="border-2 border-gray-300 p-2"
        />
      </div>
      <Button className=" w-20 text-white p-2">Save</Button>
    </div>
  );
}
export default ProfileInput;
