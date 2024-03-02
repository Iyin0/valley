'use client'

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import logo from '@/assets/PlaceholderCompanyLogos.png'
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  companyName: z.string().min(2).max(50),
  companyWebsite: z.string().min(2).max(50),
  companyLinkedIn: z.string().min(2).max(50),
  companyIndustry: z.string().min(2).max(50),
  employeeCount: z.string(),
  companyDescription: z.string().min(2).max(1000),
  companyGoals: z.string().min(2).max(100),
  companyHeadquarters: z.string().min(2).max(50),
  fundingRound: z.string(),
  faq: z.string().min(2).max(50),
})


export default function Home() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      companyWebsite: "",
      companyLinkedIn: "",
      companyIndustry: "",
      employeeCount: "",
      companyDescription: "",
      companyGoals: "",
      companyHeadquarters: "",
      fundingRound: "",
      faq: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values)
  }

  const counts = ['1-10', '10-100', '100-500', '1000+']
  const stages = ['Seed', 'Angel', 'Venture', 'Growth']

  return (
    <main className="w-full flex flex-col items-center pt-12 px-6 pb-6 md:py-12">
      <div className="w-full md:max-w-[1206px]">
        <h1 className="text-[28px] font-bold mb-[32px] md:text-[38px]">Settings</h1>
        <Tabs defaultValue="company" className="w-[100%]">
          <TabsList className="w-[100%] flex justify-start overflow-x-scroll bg-[#FAFAFA] p-[6px] no-scrollbar rounded-xl mb-[32px] md:w-fit">
            <TabsTrigger value="profile" className="text-[14px] font-medium">Your Profile</TabsTrigger>
            <TabsTrigger value="company" className="text-[14px] font-medium">Company Info</TabsTrigger>
            <TabsTrigger value="seats" className="text-[14px] font-medium">Manage Seats</TabsTrigger>
            <TabsTrigger value="contact" className="text-[14px] font-medium">Do not contact</TabsTrigger>
            <TabsTrigger value="integrations" className="text-[14px] font-medium">Integrations</TabsTrigger>
          </TabsList>
          <TabsContent value="profile"></TabsContent>
          <TabsContent value="company">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="w-full flex flex-col mb-12 md:flex-row md:justify-between">
                  <div className="flex w-full justify-between flex-wrap mb-[30px] md:order-1 md:mb-0 md:w-[auto] md:flex-row md:flex-nowrap md:space-x-[12px]">
                    <Button className="w-full font-medium max-w-[165px] h-[38px] bg-white text-black rounded-2 text-[14px] border-[1px] border-[#17171F1A] shadow-md hover:bg-white md:w-[67px]">Cancel</Button>
                    <Button type="submit" className="w-full font-medium max-w-[165px] h-[38px] rounded-2 bg-[#17171F] text-[14px] hover:bg-[#17171F] md:w-[110px]">Submit</Button>
                  </div>
                  <div className="flex justify-between items-center md:space-x-[30px]">
                    <Image src={logo} alt="Company logo" width={108} height={108} />
                    <div>
                      <div className="flex items-center text-[12px] space-x-[12px] mb-[12px]">
                        <Button className="w-[64px] h-[32px] font-medium rounded-[6px] bg-[#CA3A31] text-white text-[12px] px-[10px] py-[6px] hover:bg-[#CA3A31]">Remove</Button>
                        <Button className="w-[85px] h-[32px] font-medium rounded-[6px] bg-white text-black text-[12px] px-[10px] py-[6px] border-[1px] border-[#17171F1A] shadow-md hover:bg-white">Change Photo</Button>
                      </div>
                      <p className="text-[#17171F] text-opacity-40 font-medium text-[14px]">or drag and drop (SVG, PNG, JPG)</p>
                    </div>
                  </div>
                </div>
                <div className="md:flex md:flex-row md:flex-wrap md:justify-between">
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem className="mb-[28px] md:w-full md:max-w-[562px]">
                        <FormLabel className="font-medium text-sm mb-2">Company&apos;s Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Sixteen Inc." {...field} className="font-medium text-sm text-[#17171F] mb-7" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyWebsite"
                    render={({ field }) => (
                      <FormItem className="mb-[28px] md:w-full md:max-w-[562px]">
                        <FormLabel className="font-medium text-sm mb-2">Company&apos;s Website</FormLabel>
                        <FormControl>
                          <Input placeholder="https://sixteen.life/" {...field} className="font-medium text-sm text-[#17171F] mb-7" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyLinkedIn"
                    render={({ field }) => (
                      <FormItem className="mb-[28px] md:w-full md:max-w-[562px]">
                        <FormLabel className="font-medium text-sm mb-2">Company&apos;s LinkedIn</FormLabel>
                        <FormControl>
                          <Input placeholder="https://www.linkedin.com/company/sixteenlife" {...field} className="font-medium text-sm text-[#17171F] mb-7" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyIndustry"
                    render={({ field }) => (
                      <FormItem className="mb-[28px] md:w-full md:max-w-[562px]">
                        <FormLabel className="font-medium text-sm mb-2">Company&apos;s Industry</FormLabel>
                        <FormControl>
                          <Input placeholder="Digital Wellbeing" {...field} className="font-medium text-sm text-[#17171F] mb-7" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="employeeCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-sm mb-2">Employee Count</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="font-medium text-sm mb-7 flex space-x-3 flex-wrap items-center"
                        >
                          {counts.map((item, index) => (
                            <div className="flex items-center space-x-2" key={index}>
                              <Label htmlFor={item} className="h-[38px] w-fit px-3 py-2 rounded-[100px] cursor-pointer font-medium text-sm text-[#17171F] border-[1px] border-[#17171F1A] has-[:checked]:bg-black has-[:checked]:text-white">
                                <RadioGroupItem value={item} id={item} className="hidden" />
                                {item}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-sm mb-2">Company&apos;s Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Redesign your digital life, reduce your screen time" {...field} className="min-h-9 h-[38px] font-medium text-sm text-[#17171F] mb-7 resize-none md:h-[38px]" />
                      </FormControl>
                      <FormDescription>
                        Your detailed company description
                      </FormDescription>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyGoals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-sm mb-2">What are your company goals?</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Help everyone to be more conscious of where they are spending their time" {...field} className="h-[60px] min-h-9 resize-none md:h-[38px]" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyHeadquarters"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-sm mb-2">Company&apos;s Headquarters</FormLabel>
                      <FormControl>
                        <Input placeholder="Delhi, India" {...field} className="font-medium text-sm text-[#17171F] mb-7" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
                  <FormField
                    control={form.control}
                    name="fundingRound"
                    render={({ field }) => (
                      <FormItem className="mb-[28px] md:w-full md:max-w-[562px]">
                        <FormLabel className="font-medium text-sm mb-2">Funding Round</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="w-[100%] font-medium text-sm text-[#17171F]">
                              <SelectValue placeholder="Seed" />
                            </SelectTrigger>
                            <SelectContent>
                              {stages.map((item, index) => (
                                <SelectItem value={item} key={index}>{item}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="faq"
                    render={({ field }) => (
                      <FormItem className="md:w-full md:max-w-[562px]">
                        <FormLabel className="font-medium text-sm mb-2">FAQs</FormLabel>
                        <FormControl>
                          <Input placeholder="https://sixteen.life/faq" {...field} className="font-medium text-sm text-[#17171F] mb-7" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </form>
            </Form>
          </TabsContent>
          <TabsContent value="seats"></TabsContent>
          <TabsContent value="contact"></TabsContent>
          <TabsContent value="integrations"></TabsContent>
        </Tabs>

      </div>
    </main>
  );
}
