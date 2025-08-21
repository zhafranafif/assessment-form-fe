"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../component/Card.jsx";
import { Label } from "../component/Label.jsx";
import { Input } from "../component/Input.jsx";
import { useFormContext } from "react-hook-form";
const PersonalInformation = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Card className="bg-accent-foreground border-accent-foreground text-white">
        <CardHeader>
          <CardTitle className="px-6 text-xl">Personal Information</CardTitle>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium">
                  First Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  type="text"
                  className="bg-foreground/90 border-none"
                  placeholder={"Your first name"}
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <span className="text-destructive text-[12px]">
                    {errors.firstName.message || "First name is required"}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium">
                  Last Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  type="text"
                  className="bg-foreground/90 border-none"
                  placeholder={"Your last name"}
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <span className="text-destructive text-[12px]">
                    {errors.lastName.message || "Last name is required"}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="department" className="text-sm font-medium">
                  Department <span className="text-destructive">*</span>
                </Label>
                <Input
                  placeholder={"Ex: IT, Marketing, Sales"}
                  type="text"
                  className="bg-foreground/90 border-none"
                  {...register("department", { required: true })}
                />
                {errors.department && (
                  <span className="text-destructive text-[12px]">
                    {errors.department.message || "Department is required"}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="yearsworking" className="text-sm font-medium">
                  How many years have you been with this company?
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  type="number"
                  className="bg-foreground/90 border-none"
                  placeholder={"Ex: 1, 2, 3..."}
                  {...register("yearsWorking", {
                    min: { value: 0, message: "Must be ≥ 0" },
                    max: { value: 60, message: "Must be ≤ 60" },
                    required: true,
                  })}
                />
                {errors.yearsWorking && (
                  <span className="text-destructive text-[12px]">
                    {errors.yearsWorking.message || "Years working is required"}
                  </span>
                )}
              </div>
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </>
  );
};

export default PersonalInformation;
