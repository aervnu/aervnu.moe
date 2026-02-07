import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { TriangleAlert } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "Devices",
  description: "What do I (used to) use?",
};

type devicesJsonResponse = {
  computers: Array<deviceTableRowProps>;
  mobile_devices: Array<deviceTableRowProps>;
};

type deviceTableRowProps = {
  codename: string;
  systemType: string;
  os: string;
  cpu: string;
  memory: string;
  gpus: Array<string>;
  disks: Array<string>;
};

function GpuCell(props: { gpus: Array<string> }) {
  if (props.gpus.length < 2) {
    return <TableCell className="w-32 text-wrap">{props.gpus}</TableCell>;
  } else {
    return (
      <TableCell className="w-4">
        <div className="flex flex-col gap-2 w-40 flex-wrap text-wrap">
          {props.gpus.map((gpu: string, index: number) => {
            return <li key={index}>{gpu}</li>;
          })}
        </div>
      </TableCell>
    );
  }
}

function DiskCell(props: { disks: Array<string> }) {
  if (props.disks.length < 2) {
    return <TableCell className="w-32 text-wrap">{props.disks}</TableCell>;
  } else {
    return (
      <TableCell>
        <div className="flex flex-col gap-2 w-32 flex-wrap text-wrap">
          {props.disks.map((disk: string, index: number) => {
            return <li key={index}>{disk}</li>;
          })}
        </div>
      </TableCell>
    );
  }
}

function DeviceTableRow(props: { device: deviceTableRowProps }) {
  return (
    <TableRow>
      <TableCell className="w-32 text-wrap">{props.device.codename}</TableCell>
      <TableCell className="w-32 text-wrap">
        {props.device.systemType}
      </TableCell>
      <TableCell className="w-32 text-wrap">{props.device.os}</TableCell>
      <TableCell className="w-32 text-wrap">{props.device.cpu}</TableCell>
      <TableCell className="w-32 text-wrap">{props.device.memory}</TableCell>
      <GpuCell gpus={props.device.gpus} />
      <DiskCell disks={props.device.disks} />
    </TableRow>
  );
}

const page = async () => {
  try {
    const devicesResponse = await fetch("https://devicejson.aervnu.moe/", {
      cache: "no-store",
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Content-Type": "application/json"
  },
});
    const devices: devicesJsonResponse = await devicesResponse.json();

    return (
      <div className="flex flex-col justify-center text-center">
        <h1 className="mb-6">
          <strong>My devices</strong>
        </h1>

        <div className="flex flex-col justify-center items-center text-center gap-12">
          <div className="w-full flex flex-col gap-3">
            <p className="font-bold text-xl w-full text-center">Computers</p>
            <ScrollArea className="w-full whitespace-nowrap rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center">Codename</TableHead>
                    <TableHead className="text-center">System type</TableHead>
                    <TableHead className="text-center">OS</TableHead>
                    <TableHead className="text-center">CPU</TableHead>
                    <TableHead className="text-center">Memory</TableHead>
                    <TableHead className="text-center">GPU</TableHead>
                    <TableHead className="text-center">Disk(s)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {devices.computers.map((device, index: number) => (
                    <DeviceTableRow device={device} key={index} />
                  ))}
                </TableBody>
              </Table>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <div className="border w-96 border-[#d9d9d9]"></div>

          <div className="w-full flex flex-col gap-3">
            <p className="font-bold text-xl w-full text-center">
              Mobile Devices
            </p>
            <ScrollArea className="w-full whitespace-nowrap rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center">Codename</TableHead>
                    <TableHead className="text-center">System type</TableHead>
                    <TableHead className="text-center">OS</TableHead>
                    <TableHead className="text-center">CPU</TableHead>
                    <TableHead className="text-center">Memory</TableHead>
                    <TableHead className="text-center">GPU</TableHead>
                    <TableHead className="text-center">Storage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {devices.mobile_devices.map((device, index: number) => (
                    <DeviceTableRow device={device} key={index} />
                  ))}
                </TableBody>
              </Table>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <b className="text-white">Stay tuned for more updates!</b>
        </div>
      </div>
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e);
      return (
        <div className="flex flex-col justify-center text-center">
          <h1 className="mb-6">
            <strong>My devices</strong>
          </h1>

          <div className="w-full flex flex-col gap-3 items-center">
            <TriangleAlert color="orange" />
            <div className="flex flex-col items-center gap-2">
              <p>
                Oops. That wasn&apos;t supposed to happen.{" "}
                <a href="/">Head back home?</a>
              </p>
            </div>
            <Accordion type="single" collapsible className="w-[50%]">
              <AccordionItem value="item-1">
                <AccordionTrigger>Error details</AccordionTrigger>
                <AccordionContent>
                  <p>{e.message}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      );
    }
  }
};

export default page;